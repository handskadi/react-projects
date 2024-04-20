function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Header() {
  return <h1>Mohamed KADI</h1>;
}
function Avatar() {
  return <img className="avatar" src="/mk-modified.jpg" alt="" />;
}
function Intro() {
  return (
    <div>
      <Header />
      <p>This is Mohamed KADI a software Enginer from Alx</p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill name="Frontend 😜" color="red" />
      <Skill name="Backend 😎" color="yellow" />
      <Skill name="Devops 🎁" color="green" />
    </div>
  );
}

function Skill(props) {
  return (
    <div
      style={{
        background: props.color,
      }}
      className="skill"
    >
      <span>{props.name}</span>
    </div>
  );
}

export default App;
