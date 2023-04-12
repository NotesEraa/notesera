const [ qdata , setqdata] = useState({
    programme_name:"",
    semestar:"",
    subject_name:"",
    end_sem_paper:false,
    mid_sem_paper:false

 });

 
 const addMutation = useMutation({
   mutationFn: async (data) => {
     return await 
        publicAxios.post('getnotes/',data).then((res)=>{
           // window.alert(res.access_token);
           queryClient.invalidateQueries({ queryKey: ['qdata'] });
        })
   },
 })

 const handleSubmit=(e)=>{

   console.log("in handle block!")
   e.preventDefault();
   const data = {
    "programme_name":programme_name,
     "semestar":semester,
     "subject_name":subject_name,
     "end_sem_paper":end_sem_paper,
     "mid_sem_paper":mid_sem_paper
   }
   addMutation.mutate(data) 
   
   queryClient.invalidateQueries("qdata")
}

 const handleInput = (e)=>{
   const data = e.target.value;
   const name = e.target.name;
   console.log(data);
   setuser({...qdata,[name]:data});
}