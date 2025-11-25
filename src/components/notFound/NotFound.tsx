import notFound from "./../../assets/images/NotFound.png"

const NotFound = () => {
  return (
    <>
      <figure className="h-screen flex justify-center  items-center ">
        <img src={notFound} className="w-[80%]" alt="not found page" />
      </figure>
    </>
  )
}

export default NotFound
