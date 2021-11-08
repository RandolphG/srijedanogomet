export const ContextMenuViewModel = () =>{
    const menuSubList = [
        {
            classname: "menu-button--orange",
            dataFeather: "square",
            text: "Needs review",
        },
        {
            classname: "menu-button--purple",
            dataFeather: "octagon",
            text: "In progress",
        },
        {
            classname: "menu-button--green",
            dataFeather: "triangle",
            text: "Approved",
        },
        {
            classname: "menu-button--black menu-button--checked",
            dataFeather: "circle",
            text: "No status",
        },
    ];

    const contextOptions = [
        { dataFeather: "link", text: "Copy Link Address" },
        { dataFeather: "folder-plus", text: "Move to" },
        { dataFeather: "copy", text: "Copy to" },
        { dataFeather: "lock", text: "Make Private" },
        { dataFeather: "download", text: "Download" },
    ];

    return {
        menuSubList,
        contextOptions,
    };
}
