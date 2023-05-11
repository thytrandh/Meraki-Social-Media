
import "../CardTitle/CardTitle.scss"
const CardTitle = ({ content1, content2 }) => {
  return (
    <div className="card-title bg-primary p-3 line-height mb-0">
      <h5 class="mb-0 text-white line-height">{content1}</h5>
      <span class="text-white font-size-12">{content2}</span>
      {/* <small class="badge badge-light float-right pt-1">4</small> */}
    </div>
  );
};

export default CardTitle;
