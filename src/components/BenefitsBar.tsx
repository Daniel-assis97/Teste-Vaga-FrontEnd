import { CardIcon, ShieldIcon, TruckIcon } from './Icons';
import '../styles/components/BenefitsBar.scss';

const BENEFITS = [
  { id: 'secure', icon: <ShieldIcon size={20} />, before: 'Compra ', highlight: '100% segura', after: '' },
  { id: 'shipping', icon: <TruckIcon size={20} />, before: 'Frete grátis ', highlight: 'acima de R$ 200', after: '' },
  { id: 'installments', icon: <CardIcon size={20} />, before: '', highlight: 'Parcele', after: ' suas compras' },
];

function BenefitsBar() {
  return (
    <aside className="benefits-bar" aria-label="Benefícios da loja">
      <ul className="benefits-bar__list">
        {BENEFITS.map(({ id, icon, before, highlight, after }) => (
          <li key={id} className="benefits-bar__item">
            <span className="benefits-bar__icon">{icon}</span>
            <span className="benefits-bar__text">
              {before}
              <strong>{highlight}</strong>
              {after}
            </span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default BenefitsBar;
