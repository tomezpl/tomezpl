export function getNavbarClass(show = false): string {
    const baseClass =
        "col-5 col-sm-4 col-md-3 col-lg-2 col-xl-2 col-xxl-2 start-0 tz-sidebar-container";
    if (show !== true) {
        return `w-0`;
    } else {
        return baseClass;
    }
}
