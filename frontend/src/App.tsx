import './App.css'
function App() {
  return (
    <main className="landing-page">
      <section className="hero">
        <p className="eyebrow">Computer Science • Grove City College</p>

        <h1>Lucas Sanderson</h1>

        <h2>Computer Science Student & Aspiring Software Engineer</h2>

        <p className="intro">
          I am a senior Computer Science student at Grove City College with
          minors in Artificial Intelligence & Machine Learning and Cybersecurity.
          I enjoy building software, learning about security, and exploring
          how intelligent systems can be developed and applied in the real world.
        </p>
      </section>

      <section className="about">
        <h2>About Me</h2>

        <div className="cards">
          <article>
            <h3>AI & Machine Learning</h3>
            <p>
              My AI and Machine Learning minor has given me an opportunity to
              explore topics such as machine learning models, algorithms, and
              data-driven problem solving.
            </p>
          </article>

          <article>
            <h3>Cybersecurity</h3>
            <p>
              I also have a minor in Cybersecurity and enjoy learning how
              software and computer systems can be attacked, defended, and
              secured.
            </p>
          </article>

          <article>
            <h3>Security Labs</h3>
            <p>
              I enjoy working through hands-on security labs on pwn.college,
              a cybersecurity education platform operated by Arizona State
              University. These labs let me practice security concepts in
              realistic environments.
            </p>
          </article>

          <article>
            <h3>Adelphikos</h3>
            <p>
              Outside of academics, I am a member of the Adelphikos fraternity
              at Grove City College in Pennsylvania.
            </p>
          </article>
        </div>
      </section>

      <section className="projects">
        <h2>What I'm Working Toward</h2>

        <p>
          This site will eventually showcase my software projects, engineering
          decisions, and other work from my time studying computer science.
        </p>
      </section>
    </main>
  )
}

export default App