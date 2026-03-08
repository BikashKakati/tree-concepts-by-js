# Tree in development
A **tree** is basically a nested data structure which start with a **root** element and nested in multiple levels. But to reach each element in a **tree** we get only one path.

One common example of tree datastructure is **folders and files**

```
media
 ├── images
 │    ├── photo.png
 │    ├── wallpaper.jpg
 │    └── logo.svg
 ├── music
 └── videos
```

```javascript
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
```




## 🧩 Tree Terminologies

Let’s define important terms using the **media folder** example.

### 1️⃣ Node

A **node** is **any item** in the tree.

📁 media → node  
📁 images → node  
📄 photo.png → node

Everything is a node.

---

### 2️⃣ Root

The **root** is the **top-most node** of the tree.

In our example:

📁 **media** is the root.

Every tree has exactly **one root** 🌱

---

### 3️⃣ Parent and Child

If one node directly contains another:

- the container is the **parent**
- the contained item is the **child**

Example:

- media is parent of images
- images is parent of photo.png

---

### 4️⃣ Siblings

Nodes that share the **same parent** are siblings.

Example:

- images, music, and videos are siblings
- photo.png and wallpaper.jpg are siblings

---

### 5️⃣ Leaf Node 🍃

A **leaf node** is a node that has **no children**.

Example:

- photo.png
- wallpaper.jpg
- logo.svg

Files are usually leaf nodes.

---

### 6️⃣ Subtree 🌿

A **subtree** is any node along with everything inside it.

Example:

- images folder + all its files = a subtree
- music folder alone is also a subtree

---

### 7️⃣ Depth 📏

**Depth** means:
👉 how far a node is from the root

Let’s count depth starting from **0**:

| Node      | Depth |
| --------- | ----- |
| media     | 0     |
| images    | 1     |
| photo.png | 2     |

So `photo.png` has depth **2**.

---

### 8️⃣ Height 📐

**Height** means:
👉 the longest path from the root node to a leaf

Height tells how **tall** the tree is.

---

### 9️⃣ Edge 🔗

An **edge** is the **connection between two nodes**.

It represents the relationship between a **parent and a child**.

Example edges in the media tree:

- media → images
- images → photo.png
- images → wallpaper.jpg

Key points:

- Every parent-child relationship has **one edge**
- A tree with `N` nodes always has `N - 1` edges
- Edges show **structure**, not data

---

### 🔟 Level 🪜

**Level** represents a node’s position in the tree **row-wise**, starting from the top.

There are **two common conventions** used in practice:

#### Convention 1 (very common in computer science)

* **Depth starts from 0**
* **Level starts from 1**
* Relationship:

```
level = depth + 1
```

Example:

| Node      | Depth | Level |
| --------- | ----- | ----- |
| media     | 0     | 1     |
| images    | 1     | 2     |
| photo.png | 2     | 3     |

---

#### Convention 2 (also commonly used)

* **Depth starts from 1**
* **Depth and level mean the same thing**

Example:

| Node      | Depth / Level |
| --------- | ------------- |
| media     | 1             |
| images    | 2             |
| photo.png | 3             |

---

### 🔍 Important note

Both conventions are **correct**.

What matters is:

* clearly stating which convention is being used
* staying consistent throughout

In this explanation, we follow **Convention 1**, where depth starts from **0** and level starts from **1**.

---

### 🔍 Depth vs Level (important distinction)

- **Depth** measures distance of a node from the root
- **Level** groups nodes horizontally

Depth is used more in algorithms.
Level is used more in explanations and visualizations.

---

## 🔁 Why Recursion Fits Trees Perfectly

Look at this 👇

- media has children
- images has children
- photo.png has no children

Same structure repeats again and again.

That’s exactly what recursion is good at 🔁

---

## 🧠 Key Takeaways (Very Important)

✅ A tree is hierarchical data  
✅ One root, many children  
✅ No cycles  
✅ Perfect for recursion  
✅ Used in real life everywhere  
✅ JavaScript trees are just nested objects and arrays