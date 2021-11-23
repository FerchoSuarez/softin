export interface Alert{
    title?: string;
    text?: string;
    icon?: string;
    contentClass?: string;
    confirmButton?: boolean;
    confirmButtonClass?: string;
    confirmButtonText?: string;
    cancelButton?: boolean;
    cancelButtonText?: string;
    cancelButtonClass?: string;
    closeButton?: boolean;
    template: any;
    question?: string;
    paneClass: any;
    callback: any;
}