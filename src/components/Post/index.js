
export default function Post(props) {
    const{titulo,image,description} = props;
    return (
   
        <div className="post">
          <h1 className="titulo">{titulo}</h1>
          <img src={image} alt={description} />
        </div>
     
     
    );
  }