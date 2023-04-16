
const { isLoading, error, result } = useQuery({
  queryKey: ['repoData'],
  queryFn: () =>
    axios.get(`${API_URL}/notes/`,data).then(
      (res) => res.json(),
    ),
})

if (isLoading) return 'Loading...'

if (error) return 'An error has occurred: ' + error.message


const tempdata = [
  {
      "id":1,
      "name":"mutech",
      "contact":"1212121212",
      "description":"hello all event is here",
      "link":"http://www.google.com"
  },
  {
      "id":2,
      "name":"mutech",
      "contact":"1212121212",
      "description":"hello all event is here",
      "link":"http://www.google.com"
  },
  {
      "id":3,
      "name":"mutech",
      "contact":"1212121212",
      "description":"hello all event is here",
      "link":"http://www.google.com"
  },
  {
      "id":4,
      "name":"mutech",
      "contact":"1212121212",
      "description":"hello all event is here",
      "link":"http://www.google.com"
  },
  {
      "id":4,
      "name":"mutech",
      "contact":"1212121212",
      "description":"hello all event is here",
      "link":"http://www.google.com"
  }
]

const tempdatax = [
  {"id":1, "name":"stats" , "description":"5 little mokey on the tree" , "link":"www.google.com"},
  {"id":2, "name":"stats" , "description":"5 little mokey on the tree" , "link":"www.google.com"},
  {"id":3, "name":"stats" , "description":"5 little mokey on the tree" , "link":"www.google.com"},
  {"id":4, "name":"stats" , "description":"5 little mokey on the tree" , "link":"www.google.com"},
  {"id":5, "name":"stats" , "description":"5 little mokey on the tree" , "link":"www.google.com"}
]

//notes search