export default async function loadData(getFunction, setState, setLoading, setError) {
  setLoading(true)
  try {
      const data = await getFunction()
      setState(data)
  } catch (err) {
      setError(err)
  } finally {
      setLoading(false)
  }
}