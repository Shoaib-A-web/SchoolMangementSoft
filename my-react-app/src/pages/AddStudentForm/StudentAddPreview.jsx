function studentAddpreview({watch}){
    const formData= watch();
    console.log( formData );
    return(<>
        <p>Name: {}</p>
        <p>Class: {}</p>
        <p>Father: {}</p>
        <pre>{JSON.stringify(formData,null,2)}</pre>

    </>)
}
export default studentAddpreview;