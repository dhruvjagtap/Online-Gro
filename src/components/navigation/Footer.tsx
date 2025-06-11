export default function Footer() {
  return (
    <footer className="bg-[#5a189a] text-white py-4">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} My Website. All rights reserved.
        </p>
        <p>
          <a href="/privacy-policy" className="text-white hover:text-blue-600">
            Privacy Policy
          </a>{" "}
          |
          <a
            href="/terms-of-service"
            className="text-white hover:text-blue-600"
          >
            {" "}
            Terms of Service
          </a>
        </p>
      </div>
    </footer>
  );
}
// This is a simple footer component for a Next.js application.
