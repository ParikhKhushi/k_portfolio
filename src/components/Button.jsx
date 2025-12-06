// src/components/Button.jsx (REVISED)
import { motion } from 'framer-motion';

const Button = ({ children, href, icon, primary, small, type = 'a', ...props }) => {

    // Base styles: Ensure padding is not applied globally if the button is icon-only
    const baseClasses = `
    font-semibold rounded-full transition-all duration-300 flex items-center justify-center 
    whitespace-nowrap focus:outline-none focus:ring-4
  `;

    // Size styles: Applied only if the button has text (children)
    const sizeClasses = children ? (
        small
            ? "px-4 py-2 text-sm"
            : "px-8 py-3 text-base"
    ) : ""; // No default padding if icon-only

    // Theme styles
    const primaryClasses = primary
        ? `bg-pink-blush text-white hover:bg-lavender-muted ring-pink-blush/50`
        : `bg-transparent border-2 border-pink-blush text-pink-blush hover:bg-pink-blush hover:text-white ring-pink-blush/50`;

    // *** CRITICAL CHANGE FOR ICON-ONLY BUTTONS ***
    const iconClasses = icon && !children
        ? `w-12 h-12 p-0 border-2 border-pink-blush ${primary ? 'bg-pink-blush' : 'bg-transparent'}`
        : '';

    const Component = motion[type === 'button' ? 'button' : 'a'];

    // Motion animation properties
    const whileHoverProps = {
        scale: 1.08,
        boxShadow: "0 8px 15px rgba(255, 192, 203, 0.5)"
    };
    const whileTapProps = { scale: 0.95 };

    return (
        <Component
            href={type === 'a' ? href : undefined}
            type={type === 'button' ? 'submit' : undefined}
            className={`${baseClasses} ${sizeClasses} ${primaryClasses} ${iconClasses}`}
            whileHover={whileHoverProps}
            whileTap={whileTapProps}
            {...props}
        >
            {/* If icon is present and no children, we center it. */}
            {icon && !children ? (
                <span className="flex items-center justify-center w-full h-full">
              {icon}
          </span>
            ) : (
                <>
                    {icon}
                    {children && <span className={icon ? 'ml-2' : ''}>{children}</span>}
                </>
            )}
        </Component>
    );
};

export default Button;