export const MODAL_OPTIONS = {
  DEFAULT: {
    modalTitle: null,
    cancelText: 'Cancel',
    acceptText: 'Accept',
    hideCancelButton: false
  },
  NEW_PRINTER: {
    modalTitle: 'Añadir nueva impresora 3D',
    cancelText: 'Cancelar',
    acceptText: 'Añadir nueva impresora',
    hideCancelButton: true,
    modalWidth: '60%',
    disabledAcceptButton: true
  }
}

export const INPUTS_FORM = {
  NEW_PRINTER: {
    printerName: null,
    printerAsin: null,
    printerImage: null,
    postLink: null,
    amazonLink: null,
    gearbestLink: null,
    printerDimensions: null,
    printerVolume: null,
    printerResolution: null,
    printerSpeed: null,
  }
}

export const MENU_ITEMS = [
  {
    name: 'Dashboard',
    icon: 'home',
    route: '/'
  },
  {
    name: '3D Printer',
    icon: 'amazon',
    route: '/printers',
    detail: {
      route: '/3d-printer/:printerId'
    }
  },
  {
    name: 'Filament',
    icon: 'ship',
    route: '/filament'
  },
  {
    name: '404',
    icon: 'ship',
    route: '/404',
    hide: true
  },
]

