export default function ThankYou() {
  return (
    <div className="container text-center py-5">
      <h1 className="text-success fw-bold mb-3">✅ Thank You!</h1>
      <p className="lead">Your guide is on its way to your inbox.</p>
      <p className="mt-3">Or download it below:</p>
      <a
        href="/fitness trainer's mistakes.pdf"
        download
        className="btn btn-success btn-lg mt-3"
      >
        📥 Download Guide
      </a>
    </div>
  )
}
