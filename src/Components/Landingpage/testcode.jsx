
const { isLoading, error, result } = useQuery({
  queryKey: ['repoData'],
  queryFn: () =>
    axios.get(`${API_URL}/notes/`,data).then(
      (res) => res.json(),
    ),
})

if (isLoading) return 'Loading...'

if (error) return 'An error has occurred: ' + error.message