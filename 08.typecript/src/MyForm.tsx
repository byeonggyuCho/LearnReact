import React ,{useState}from 'react';


type Form = {name:string; description: string }

type MyFormProps = {
    onSubmit: (form:Form) => void;

}

function MyForm(props:MyFormProps){

    const [form, setForm] = useState<Form>({
        name:'',
        description:''
    })

    const {name , description } = form;


    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value } = event.target;
      
        setForm({
            ...form,
            [name]:value
        })
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>)=> {

        // 새로고침 방지
        event.preventDefault();
        props.onSubmit(form);
        setForm({
            name:'',
            description:''
        })
    }


    return (
        <form onSubmit={handleSubmit}> 
            <input type="text" onChange={onChange}/>
            <input type="text"/>
            <button type='submit'>등록</button>
        </form>
    )
}