import { app } from "firebaseConfig"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
export default function App() {
  let auth = getAuth();
  const [data, setData] = useState({});

  const handleInput = (event) => {
    let newInput = { [event.target.name]: event.target.value };

    setData({ ...data, ...newInput});
  }

  const handleSubmit = () => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
    .then((response) => {
      console.log(response.user)
    })
    .catch((err) => {
      alert(err.message)
    })
  }
  return (
    div
  )
}

let intro = document.querySelector(".intro");
let logo = document.querySelector(".logo-header");
let logoSpan = document.querySelectorAll(".logo");

window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add("active")
      }, (idx + 1) * 400)
    });

  })
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.remove("active")
        span.classList.add("fade");
      }, (idx + 1) * 50)
    });

  }, 2000)

  setTimeout(() => {
    intro.style.top = "-100vh"
  }, 2300)
})
