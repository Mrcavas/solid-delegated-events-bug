import { createResource, Suspense } from "solid-js"

export default function App() {
  return (
    <Suspense>
      <button onMouseMove={console.log}>asdasdad</button>
      <Test />
    </Suspense>
  )
}

function Test() {
  const [res] = createResource(async () => {
    console.log("fetching......")
    await new Promise((r) => setTimeout(r, 500))
    return "test"
  })

  return <>{res()}</>
}
