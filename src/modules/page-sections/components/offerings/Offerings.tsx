import TripleGrid from "@modules/general/components/triple-grid";
import OfferCard from "@modules/general/components/offer-card/";
import { URLS } from "@modules/general/libraries/constants";
import stl from "./Offerings.module.scss";

const Offerings = () => {
  return (
    <TripleGrid
      breakpoint="sm"
      className={stl.root}
      elements={[
        <OfferCard
          href={URLS.PRODUCT.NEW_ARRIVALS}
          title="new products"
          src="/images/assets/offerings/sales.svg"
          key={0}
        />,
        <OfferCard
          href={URLS.PRODUCT.PROMOTION}
          title="promotion"
          src="/images/assets/offerings/promotion.svg"
          key={1}
        />,
        <OfferCard
          href={URLS.PRODUCT.BEST_SELLER}
          title="best sellers"
          src="/images/assets/offerings/best-seller.svg"
          key={2}
        />,
      ]}
    />
  );
};

export default Offerings;
