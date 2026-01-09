// Solar Bold Style Icons
// Based on https://www.svgrepo.com/collection/solar-bold-icons/

interface IconProps {
  className?: string;
}

export function WalletIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M4.172 3.172C3 4.343 3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828C5.343 22 7.229 22 11 22h2c3.771 0 5.657 0 6.828-1.172C21 19.657 21 17.771 21 14v-4c0-3.771 0-5.657-1.172-6.828C18.657 2 16.771 2 13 2h-2C7.229 2 5.343 2 4.172 3.172zM7.25 8a.75.75 0 01.75-.75h4a.75.75 0 010 1.5H8a.75.75 0 01-.75-.75zm8 5a1.25 1.25 0 100 2.5 1.25 1.25 0 000-2.5z"/>
    </svg>
  );
}

export function CartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M2.08 2.75c0-.41.34-.75.75-.75h.66c.93 0 1.39 0 1.77.2.34.18.6.47.76.83.18.4.21.9.24 1.66l.02.41H18.63c.71 0 1.33 0 1.84.07.53.07 1.04.23 1.46.6.42.38.65.87.79 1.39.14.5.16 1.12.18 1.84l.05 1.83c.03 1.1.06 2.05-.09 2.8-.17.82-.54 1.54-1.2 2.04-.66.51-1.46.66-2.36.71-.87.05-1.96.05-3.3.05H12c-2.83 0-4.24 0-5.28-.55a5 5 0 01-1.17-.83c-.16-.15-.31-.31-.45-.48l-.1-.12c-.73-.87-.97-1.96-1.1-3.6l-.23-3a50.9 50.9 0 01-.08-1.67H3.5l-.02-.66c-.03-.76-.05-1.26-.18-1.53a.52.52 0 00-.19-.22C3 3.5 2.76 3.5 2.83 3.5h-.75z"/>
      <path d="M7.5 18a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM16.5 18a1.5 1.5 0 100 3 1.5 1.5 0 000-3z"/>
    </svg>
  );
}

export function BoxIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2l9 4.5V17l-9 5-9-5V6.5L12 2z"/>
      <path fillOpacity="0.5" d="M12 2L3 6.5 12 11l9-4.5L12 2z"/>
      <path fillOpacity="0.3" d="M12 11v11l9-5V6.5L12 11z"/>
    </svg>
  );
}

export function UsersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx="12" cy="6" r="4"/>
      <ellipse cx="12" cy="17" rx="7" ry="4"/>
      <circle cx="19" cy="8" r="2.5" fillOpacity="0.5"/>
      <ellipse cx="19" cy="15" rx="3" ry="2" fillOpacity="0.5"/>
    </svg>
  );
}

export function ChartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M3.172 20.828C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172C22 19.657 22 17.771 22 14v-4c0-3.771 0-5.657-1.172-6.828C19.657 2 17.771 2 14 2h-4C6.229 2 4.343 2 3.172 3.172 2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828zM8 16.75a.75.75 0 01-.75-.75v-4a.75.75 0 011.5 0v4a.75.75 0 01-.75.75zm4.75-.75a.75.75 0 01-1.5 0V8a.75.75 0 011.5 0v8zm3.25.75a.75.75 0 01-.75-.75v-5a.75.75 0 011.5 0v5a.75.75 0 01-.75.75z"/>
    </svg>
  );
}

export function DashboardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M2 6.5c0-1.886 0-2.828.586-3.414C3.172 2.5 4.114 2.5 6 2.5s2.828 0 3.414.586C10 3.672 10 4.614 10 6.5s0 2.828-.586 3.414C8.828 10.5 7.886 10.5 6 10.5s-2.828 0-3.414-.586C2 9.328 2 8.386 2 6.5z"/>
      <path d="M14 6.5c0-1.886 0-2.828.586-3.414C15.172 2.5 16.114 2.5 18 2.5s2.828 0 3.414.586C22 3.672 22 4.614 22 6.5s0 2.828-.586 3.414c-.586.586-1.528.586-3.414.586s-2.828 0-3.414-.586C14 9.328 14 8.386 14 6.5z" fillOpacity="0.5"/>
      <path d="M2 17.5c0-1.886 0-2.828.586-3.414C3.172 13.5 4.114 13.5 6 13.5s2.828 0 3.414.586c.586.586.586 1.528.586 3.414s0 2.828-.586 3.414c-.586.586-1.528.586-3.414.586s-2.828 0-3.414-.586C2 20.328 2 19.386 2 17.5z" fillOpacity="0.5"/>
      <path d="M14 17.5c0-1.886 0-2.828.586-3.414.586-.586 1.528-.586 3.414-.586s2.828 0 3.414.586c.586.586.586 1.528.586 3.414s0 2.828-.586 3.414c-.586.586-1.528.586-3.414.586s-2.828 0-3.414-.586C14 20.328 14 19.386 14 17.5z"/>
    </svg>
  );
}

export function FolderIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M2 6.95c0-.883 0-1.324.07-1.692A4 4 0 015.258 2.07C5.626 2 6.068 2 6.95 2c.386 0 .58 0 .766.017a4 4 0 012.18.904c.144.119.28.255.554.529L11 4h6c1.886 0 2.828 0 3.414.586C21 5.172 21 6.114 21 8v8c0 1.886 0 2.828-.586 3.414C19.828 20 18.886 20 17 20H7c-1.886 0-2.828 0-3.414-.586C3 18.828 3 17.886 3 16V8c0-.943 0-1.414-.293-1.707C2.414 6 1.943 6 1 6h1c0-.35 0-.525.026-.676A2 2 0 013.324 4.026C3.476 4 3.65 4 4 4c.333 0 .5 0 .636-.017A2 2 0 006.017 2.602c.017-.136.017-.303.017-.602"/>
    </svg>
  );
}

export function TagIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M4.728 16.137c-1.545-1.546-2.318-2.318-2.605-3.321-.288-1.003-.042-2.068.45-4.197l.283-1.228c.413-1.792.62-2.688 1.233-3.302.614-.613 1.51-.82 3.302-1.233l1.228-.284c2.13-.491 3.194-.737 4.197-.45 1.003.288 1.775 1.061 3.32 2.606l1.83 1.83C20.657 9.248 22 10.592 22 12.262c0 1.67-1.343 3.014-4.033 5.704-2.69 2.69-4.034 4.034-5.704 4.034-1.67 0-3.014-1.343-5.704-4.034l-1.83-1.83z"/>
      <circle cx="8.607" cy="8.879" r="2.5" fill="white" fillOpacity="0.5"/>
    </svg>
  );
}

export function FileIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M14 22h-4c-3.771 0-5.657 0-6.828-1.172C2 19.657 2 17.771 2 14v-4c0-3.771 0-5.657 1.172-6.828C4.343 2 6.229 2 10 2h4c3.771 0 5.657 0 6.828 1.172C22 4.343 22 6.229 22 10v4c0 3.771 0 5.657-1.172 6.828C19.657 22 17.771 22 14 22z"/>
      <path d="M6 17.75a.75.75 0 01.75-.75h6.5a.75.75 0 010 1.5h-6.5a.75.75 0 01-.75-.75zm0-4a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75zm0-4a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H6.75a.75.75 0 01-.75-.75z" fill="white" fillOpacity="0.5"/>
    </svg>
  );
}

export function SettingsIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M14.279 2.152C13.909 2 13.439 2 12.5 2s-1.408 0-1.779.152a2 2 0 00-1.09 1.083c-.094.223-.13.484-.145.863a1.617 1.617 0 01-.796 1.353 1.617 1.617 0 01-1.567.008c-.336-.178-.579-.276-.82-.308a2 2 0 00-1.478.396C4.46 5.79 4.166 6.207 3.58 7.043c-.587.836-.881 1.254-.94 1.691a2 2 0 00.39 1.48c.133.172.319.315.626.481.65.352 1.064.964 1.064 1.644 0 .68-.414 1.292-1.064 1.644-.307.166-.493.309-.626.48a2 2 0 00-.39 1.48c.059.438.353.856.94 1.692.586.836.88 1.254 1.245 1.498a2 2 0 001.478.396c.24-.032.484-.13.82-.308a1.617 1.617 0 011.567.008c.483.28.77.795.796 1.353.015.38.051.64.145.863a2 2 0 001.09 1.083c.37.152.84.152 1.779.152s1.409 0 1.779-.152a2 2 0 001.09-1.083c.094-.223.13-.483.145-.863.025-.558.313-1.074.796-1.353a1.617 1.617 0 011.567-.008c.336.178.579.276.82.308a2 2 0 001.478-.396c.365-.244.659-.662 1.245-1.498.587-.836.881-1.254.94-1.691a2 2 0 00-.39-1.48c-.133-.172-.319-.315-.626-.481-.65-.352-1.064-.964-1.064-1.644 0-.68.414-1.292 1.064-1.644.307-.166.493-.309.626-.48a2 2 0 00.39-1.48c-.059-.438-.353-.856-.94-1.692-.586-.836-.88-1.254-1.245-1.498a2 2 0 00-1.478-.396c-.24.032-.484.13-.82.308a1.617 1.617 0 01-1.567-.008 1.617 1.617 0 01-.796-1.353c-.015-.38-.051-.64-.145-.863a2 2 0 00-1.09-1.083z"/>
      <circle cx="12.5" cy="12.339" r="3" fill="white" fillOpacity="0.5"/>
    </svg>
  );
}

export function UserIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <circle cx="12" cy="6" r="4"/>
      <ellipse cx="12" cy="17" rx="7" ry="4"/>
    </svg>
  );
}

export function LogoutIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M15 2h-1c-2.828 0-4.243 0-5.121.879C8 3.757 8 5.172 8 8v8c0 2.828 0 4.243.879 5.121C9.757 22 11.172 22 14 22h1c2.828 0 4.243 0 5.121-.879C21 20.243 21 18.828 21 16V8c0-2.828 0-4.243-.879-5.121C19.243 2 17.828 2 15 2z" fillOpacity="0.5"/>
      <path d="M8 8c0-1.538 0-2.657.141-3.5H8c-2.357 0-3.536 0-4.268.732C3 5.964 3 7.143 3 9.5v5c0 2.357 0 3.536.732 4.268.732.732 1.911.732 4.268.732h.141C8 18.657 8 17.538 8 16V8z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M4.47 11.47a.75.75 0 000 1.06l2 2a.75.75 0 001.06-1.06l-.72-.72H14a.75.75 0 000-1.5H6.81l.72-.72a.75.75 0 00-1.06-1.06l-2 2z"/>
    </svg>
  );
}

export function PlusIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm.75-13a.75.75 0 00-1.5 0v2.25H9a.75.75 0 000 1.5h2.25V15a.75.75 0 001.5 0v-2.25H15a.75.75 0 000-1.5h-2.25V9z"/>
    </svg>
  );
}

export function EyeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 9.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5z"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M12 4c-4.727 0-7.544 2.856-9.152 5.026-.469.633-.703.95-.744 1.472-.04.523.122.988.446 1.918.324.93.487 1.395.822 1.707.335.312.795.446 1.716.713C6.89 15.487 9.264 16 12 16c2.737 0 5.11-.513 6.912-1.164.921-.267 1.381-.4 1.716-.713.335-.312.498-.777.822-1.707.324-.93.487-1.395.446-1.918-.04-.522-.275-.84-.744-1.472C19.544 6.856 16.727 4 12 4zm0 10a4 4 0 100-8 4 4 0 000 8z" fillOpacity="0.5"/>
    </svg>
  );
}

export function ArrowUpIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 4l6 6h-4v10h-4V10H6l6-6z"/>
    </svg>
  );
}

export function ArrowDownIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 20l-6-6h4V4h4v10h4l-6 6z"/>
    </svg>
  );
}

export function MenuIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M3.25 7A.75.75 0 014 6.25h16a.75.75 0 010 1.5H4A.75.75 0 013.25 7zm0 5a.75.75 0 01.75-.75h16a.75.75 0 010 1.5H4a.75.75 0 01-.75-.75zm0 5a.75.75 0 01.75-.75h16a.75.75 0 010 1.5H4a.75.75 0 01-.75-.75z"/>
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M10.586 12L4.293 5.707a1 1 0 011.414-1.414L12 10.586l6.293-6.293a1 1 0 111.414 1.414L13.414 12l6.293 6.293a1 1 0 01-1.414 1.414L12 13.414l-6.293 6.293a1 1 0 01-1.414-1.414L10.586 12z"/>
    </svg>
  );
}

export function ReportIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M3 10c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h2c3.771 0 5.657 0 6.828 1.172C21 4.343 21 6.229 21 10v4c0 3.771 0 5.657-1.172 6.828C18.657 22 16.771 22 13 22h-2c-3.771 0-5.657 0-6.828-1.172C3 19.657 3 17.771 3 14v-4z" fillOpacity="0.5"/>
      <path d="M8 12a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm4-3a1 1 0 011 1v6a1 1 0 11-2 0v-6a1 1 0 011-1zm4-2a1 1 0 011 1v8a1 1 0 11-2 0V8a1 1 0 011-1z"/>
    </svg>
  );
}

