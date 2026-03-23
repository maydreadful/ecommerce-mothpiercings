// 1. Adicione a importação do store no topo:
import { useCartStore } from "@/store/useCartStore";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  // 2. Puxe o total de itens e a função de abrir do Zustand
  const cartItems = useCartStore((state) => state.items);
  const openCart = useCartStore((state) => state.openCart);
  
  // Calcula o total de itens (somando as quantidades)
  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);

  // ... (resto do código do Header continua igual) ...

  // 3. Atualize o botão da ShoppingBag lá no final do componente:
  <button onClick={openCart} className="text-silver hover:text-foreground transition-colors relative">
    <ShoppingBag size={18} />
    {totalItems > 0 && (
      <span className="absolute -top-1.5 -right-1.5 bg-blood text-white text-[9px] w-4 h-4 flex items-center justify-center rounded-full font-body font-bold">
        {totalItems}
      </span>
    )}
  </button>