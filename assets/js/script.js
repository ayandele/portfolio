// Get the portfolio buttons
const portfolioButtons = document.querySelectorAll('.portfolio-button');

// Add event listener to each button
portfolioButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the target URL based on the button clicked
    const targetUrl = getTargetUrl(button);

    // Redirect to the target URL
    window.location.href = targetUrl;
  });
});

// Function to get the target URL based on the button clicked
function getTargetUrl(button) {
  // Add your logic to determine the target URL for each button
  // Example:
  if (button.classList.contains('button-1')) {
    return 'https://example.com/page1';
  } else if (button.classList.contains('button-2')) {
    return 'https://example.com/page2';
  } else if (button.classList.contains('button-3')) {
    return 'https://example.com/page3';
  }
  // Add more conditions for other buttons as needed

  // Default fallback URL if no specific condition is met
  return '#';
}
