/**
 * Count nodes
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

function getCountOfLeafNodes() {

    let count = 0
    if (!tree.children.length) {
        count++;
        return count;
    }

    for (let children of tree.children) {
        count += getCountOfLeafNodes(children)
    }
    return count;

}


function getCountOfNodes(tree) {
    let count = 1 // for the root node
    if (!tree.children.length) {
        return count;
    }

    for (let children of tree.children) {
        count += getCountOfNodes(children)
    }
    return count;
}

console.log(getCountOfNodes(mediaTree))