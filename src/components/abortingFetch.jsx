import useFetch from "components/useFetch"

function AbortingFetch() {
    const { loading, data, error } = useFetch('#')

  return (
    <>
      <h3>Not aborting fetch request</h3>
      <p>
        Use AbortController in return part of useEffect to abort the fetch
        request, when so many requests are pending.
      </p>
    </>
  )
}

export default AbortingFetch
