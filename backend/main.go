package main

import (
	"log"
	"os"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
	"github.com/joho/godotenv"
)

func main() {
	// Load environment variables
	if err := godotenv.Load(); err != nil {
		log.Println("No .env file found, using system env vars")
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	// Set up Gin router
	router := gin.Default()

	// Enable default CORS
	router.Use(cors.Default())

	// Health check/test route
	router.GET("/ping", func(c *gin.Context) {
		c.JSON(200, gin.H{
			"message": "pong",
		})
	})

	log.Printf("Server is running at http://localhost:%s", port)
	if err := router.Run(":" + port); err != nil {
		log.Fatal("Failed to start server:", err)
	}
}
