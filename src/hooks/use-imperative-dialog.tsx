import { Button } from "@components/atoms/Button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@components/atoms/Dialog";
import { FC } from "react";
import { createRoot } from "react-dom/client";
export interface DeleteDialogProps {
  heading: string;
  text: string;
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
  confirmText?: string;
  cancelText?: string;
}
const DeleteDialog: FC<DeleteDialogProps> = (props) => {
  const {
    heading,
    text,
    confirmText = "Yes, confirm",
    cancelText = "Cancel",
    onCancel,
    onConfirm,
    open,
  } = props;
  return (
    <Dialog
      open={open}
      onOpenChange={() => {
        onCancel();
      }}
    >
      <DialogContent className="max-w-[300px] sm:md:max-w-[375px] md:max-w-[425px] bg-white">
        <DialogHeader>
          <DialogTitle>{heading}</DialogTitle>
          <DialogDescription>{text}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            onClick={onConfirm}
            className="bg-accent-red hover:bg-accent-red/80"
          >
            {confirmText}
          </Button>
          <Button onClick={onCancel} variant={"outline"}>
            {cancelText}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
type ImperativeDialogProps = {
  heading: string;
  text: string;
  confirmText?: string;
  cancelText?: string;
};

const useImperativeDialog = () => {
  return ({
    heading,
    text,
    confirmText,
    cancelText,
  }: ImperativeDialogProps): Promise<boolean> => {
    // We want a promise here so we can "await" the user's action (either confirm or cancel)
    return new Promise((resolve) => {
      const mountRoot = createRoot(document.createElement("div"));
      let open = true;

      const onConfirm = () => {
        open = false;
        resolve(true);
        // trigger a rerender to close the dialog
        render();
      };

      const onCancel = () => {
        open = false;
        resolve(false);
        // trigger a rerender to close the dialog
        render();
      };

      // attach the dialog in the mount node
      const render = () => {
        mountRoot.render(
          <DeleteDialog
            heading={heading}
            text={text}
            open={open}
            onCancel={onCancel}
            onConfirm={onConfirm}
            confirmText={confirmText}
            cancelText={cancelText}
          />
        );
      };

      render();
    });
  };
};

export default useImperativeDialog;
