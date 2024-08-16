import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function Example() {
  return (
    <Menu as="div" className="lg:hidden my-auto relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-white hover:bg-[rgba(0,0,0,0.5)]">
          Menu

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="-mr-1 h-5 w-5 text-gray-400">
            <path fillRule="evenodd" d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z" clipRule="evenodd" />
        </svg>

        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-[rgba(0,0,0,0.5)] shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#contacto"
              className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Sobre mí
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#seguros"
              className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Seguros
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="https://www.sancristobal.com.ar/pas/rj-seguros-generales/seguros-de-retiro"
              className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Ahorro e inversión
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#contacto"
              className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Contacto
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="https://www.sancristobal.com.ar/pas/rj-seguros-generales/cotizar"
              className="block px-4 py-2 text-sm text-white data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              Cotizá tu auto
            </a>
          </MenuItem>
          
        </div>
      </MenuItems>
    </Menu>
  )
}