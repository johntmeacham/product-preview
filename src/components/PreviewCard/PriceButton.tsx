import { type ReactNode } from 'react';

export default function PriceButton({
  salePrice,
  retailPrice,
  children,
}: PriceButtonProps) {
  return (
    <>
      <div className="preview-card-pricing">
        <span className="sale-price">${salePrice}</span>
        <span className="retail-price">${retailPrice}</span>
      </div>
      <button className="add-to-cart-btn">{children}</button>
    </>
  );
}

export interface PriceButtonProps {
  salePrice: number;
  retailPrice: number;
  children: ReactNode;
}
