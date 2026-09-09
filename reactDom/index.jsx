const container=document.getElementById('root');
console.log(container);
const root= ReactDOM.createRoot(container);

// const h2 =React.createElement('h2',{style:{color:'cyan',background:'red'}},'welcome to react dom')
// const h1 = React.createElement('h1',{style:{color:'red'}},'Abes College')
// const img=React.createElement('img',{src:'https://media.istockphoto.com/id/183412466/photo/eastern-bluebirds-male-and-female.jpg?s=612x612&w=0&k=20&c=6_EQHnGedwdjM9QTUF2c1ce7cC3XtlxvMPpU5HAouhc=',style:{height:'200px', width:'400px'}})

// const div= React.createElement('div',{style:{border:'4px solid black'}}, h1,h2,img)


const h21 =<h2>Hello world</h2>; //JSX
const h11=<h2>Abes Engineering Colege </h2>
const div=<div >{h21} {h11}</div>


const wrapper=<div style={{border:'5px solid yellow'}}>
    {div}
    <h2>Hey Using JSX</h2>
</div>


root.render(wrapper)