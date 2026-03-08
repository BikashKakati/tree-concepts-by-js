/**
 * Find all the names of nodes existed
 */

const mediaTree = {
    name: "media",
    children: [
        {
            name: "images",
            children: [
                {
                    name: "events",
                    children: [
                        {
                            name: "birthday",
                            children: [
                                { name: "cake.png", children: [] },
                                { name: "party.jpg", children: [] },
                            ],
                        },
                    ],
                },
                {
                    name: "wallpapers",
                    children: [
                        { name: "nature.jpg", children: [] },
                        { name: "city.png", children: [] },
                    ],
                },
            ],
        },
        {
            name: "music",
            children: [
                {
                    name: "rock",
                    children: [{ name: "song1.mp3", children: [] }],
                },
            ],
        },
        {
            name: "videos",
            children: [],
        },
    ],
};



function findNamesOfElements(tree) {
    const helper = [];
    helper.push(tree.name);
    if (!tree.children.length) {
        return helper;
    }
    for (let children of tree.children) {
        const nameList = findNamesOfElements(children, helper);
        helper.push(...nameList);
    }
    return helper
}

const nameList = findNamesOfElements(
    mediaTree
);
console.log(nameList)