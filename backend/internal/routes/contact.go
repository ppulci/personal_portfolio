package routes

import (
	"net/http"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/resend/resend-go/v2"
	ululelimiter "github.com/ulule/limiter/v3"
	ginmiddleware "github.com/ulule/limiter/v3/drivers/middleware/gin"
	"github.com/ulule/limiter/v3/drivers/store/memory"
)

type ContactRequest struct {
	Name	string `json:"name" binding:"required"`
	Email   string `json:"email" binding:"required,email"`
	Message string `json:"message" binding:"required"`
}

func ContactHandler(c *gin.Context) {
	var req ContactRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	apiKey := os.Getenv("RESEND_SECRET")
	client := resend.NewClient(apiKey)
	toEmail := os.Getenv("CONTACT_EMAIL")
	// Debug here to check apiKey and toEmail, if needed

	params := &resend.SendEmailRequest{
		From:    "Portfolio Site <onboarding@resend.dev>",
		To:      []string{toEmail},
		Html:    "<strong>Sender Name: " + req.Name + "</strong><br/><strong>From:</strong>" + req.Email + "<br/><br/>" + req.Message,
		Subject: "Portfolio Contact Form",
		ReplyTo: req.Email,
	}

	sent, err := client.Emails.Send(params)
	if err != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
		println("Resend error:", err.Error())
		return
	}
	c.JSON(http.StatusOK, gin.H{"id": sent.Id})
}

func SetupRouter() *gin.Engine {
	rate, _ := ululelimiter.NewRateFromFormatted("2-M") // 2 requests per minute
	store := memory.NewStore()
	limiterInstance := ululelimiter.New(store, rate)
	middleware := ginmiddleware.NewMiddleware(limiterInstance)

	router := gin.Default()
	router.Use(cors.Default())
	router.Use(middleware)

	// ensure this route links up with the front end contact form
	router.POST("/api/contact", ContactHandler)

	return router
}
