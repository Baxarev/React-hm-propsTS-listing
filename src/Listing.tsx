type MainImage = {
  url_570xN: string;
}

type ListingItem = {
  listing_id: number;
  url?: string;
  MainImage?: MainImage;
  title?: string;
  currency_code?: string;
  price?: string;
  quantity?: number;
}

interface ListingProps {
  items: ListingItem[];
}

const Listing: React.FC<ListingProps> = ({ items = [] }) => {

  const getClassStatus = (quantity: number) => {
    if (quantity < 11) return 'level-low'
    if (quantity < 21) return 'level-medium'
    return 'level-high'
  };

  return (
    <div className="item-list">
      {items.map((item, index) => {
        return (
          <div key={index} className="item">
            <div className="item-image">
              <a href={item.url}>
                <img src={item.MainImage?.url_570xN} alt="Item Image" />
              </a>
            </div>
            <div className="item-details">
            <p className="item-title">
              {item.title && item.title.length > 50 ? item.title.slice(0, 50) + '...' : item.title}
            </p>
            <p className="item-price">
              {
              item.currency_code === 'USD' ? '$'+ item.price :
              item.currency_code === 'EUR' ? '€'+ item.price :
              item.price + ' ' + item.currency_code
              }
            </p>
            <p className={`item-quantity ${item.quantity && getClassStatus(item.quantity)}`}>{item.quantity}</p>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Listing;