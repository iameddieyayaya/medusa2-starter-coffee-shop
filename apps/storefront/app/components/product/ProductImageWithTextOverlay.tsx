import { StoreProduct } from "@medusajs/types";
import { ProductImageGallery } from "./ProductImageGallery";

interface ProductImageWithTextOverlayProps {
  product: StoreProduct;
  customMessage?: string;
  showOverlay?: boolean;
  img?: string;
}


export const ProductImageWithTextOverlay = ({
  product,
  customMessage = '',
  showOverlay = false,
  img,
}: ProductImageWithTextOverlayProps) => {
  const productImage = product.thumbnail || (product.images && product.images[0]?.url);
  
  if (!customMessage || !showOverlay) {
    return <ProductImageGallery key={product.id} product={product} />;
  }

  return (
    <div className="relative aspect-square w-full rounded-lg overflow-hidden [container-type:size]">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${productImage || img})`,
        }}      />

      <div className="absolute inset-0 flex items-center justify-center p-[5%]">
        <span
          className="text-primary-800 text-[clamp(0.5rem,10cqw,2rem)] font-semibold text-center break-words leading-tight drop-shadow-lg whitespace-normal"
          style={{ fontFamily: 'Quicksand, sans-serif' }}
        >
          {customMessage}
        </span>
      </div>
    </div>
  );
};