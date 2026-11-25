export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Arial, sans-serif",
        padding: "30px",
        textAlign: "center",
        backgroundColor: "#f8f8f8",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "10px",
        }}
      >
        🐱 MAI 🐱
      </h1>

      <h2
        style={{
          marginBottom: "20px",
          color: "#444",
        }}
      >
        Mimi And Idriz
      </h2>

      <img
        src="/20261104_235316 1.jpg"
        alt="Mimi and Idriz"
        style={{
          width: "300px",
          borderRadius: "20px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          marginBottom: "20px",
        }}
      />

      <p
        style={{
          fontSize: "1.3rem",
          marginBottom: "10px",
          fontWeight: "bold",
        }}
      >
        My very first Next.js application 🚀
      </p>

      <p style={{ color: "#666" }}>
        Built by Idriz with a little help from Mimi 🐱
      </p>

      <p
        style={{
          color: "#666",
          marginTop: "15px",
          maxWidth: "600px",
          lineHeight: "1.6",
        }}
      >
        Special thanks to my colleague Suraj for the kindness,
        encouragement, and initial guidance that helped me get started
        on this journey. Thank you for pointing me in the right direction
        with Next.js, Vercel, and modern web development.
      </p>

      <p
        style={{
          marginTop: "30px",
          fontStyle: "italic",
          color: "#888",
        }}
      >
        More coming soon...
      </p>
    </main>
  );
}