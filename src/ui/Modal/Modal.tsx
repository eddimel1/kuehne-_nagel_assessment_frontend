import classes from "./Modal.module.scss";
import useClickOutside from "../../Hooks/ClickOutside";
import { Portal } from "../Portal/Portal";
type props = {
  children: JSX.Element;
  open: boolean;
  onClose: () => void;
};
export const Modal = ({ children, open, onClose }: props) => {
  const ref = useClickOutside(() => {
    onClose();
  });
  if (!open) {
    return null;
  }

  return (
    <Portal>
      <div className={classes.overlay}>
        <div
          className={classes.popup}
          ref={ref as React.LegacyRef<HTMLDivElement> | null}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
};
