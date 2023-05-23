
const Image = ({ imageData }) => {
  console.log(imageData, 'aa')
  return (
    <div className="image">
      {imageData.map((item) => {
        const { id, farm, server, secret, title } = item;
        let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_q.jpg`
        return (
          <img src={url} alt={title} />
        );
      })}
    </div>
  );
};

export default Image;
