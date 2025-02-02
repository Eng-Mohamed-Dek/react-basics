import Content from "./components/Content"
import Footer from "./components/Footer"
import Header from "./components/Header"

const App = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <Header />
      <Content />
      <Footer year={year} />
    </>
  )
}

export default App