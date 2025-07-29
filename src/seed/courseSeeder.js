const courses = [
    {
        title: "HTML Masterclass",
        slug: "html",
        type: "free", // ✅ Add this
        description: "Learn HTML in depth",
        level: "Beginner",
        duration: "Self-paced",
        createdBy: "CodeXpert Admin",
        syllabus: ["HTML Tags", "Forms", "Semantics"],
        image: "https://example.com/html.png",
        price: 299,
        originalPrice: 999,
        instructor: {
            name: "CodeXpert Team",
            photo: "https://example.com/instructor.jpg",
        },
        rating: 5,
    },
    {
        title: "React Mastery",
        slug: "react-mastery",
        type: "premium", // ✅ Add this
        description: "Master React from scratch",
        level: "Beginner",
        duration: "Self-paced",
        createdBy: "Lucifer",
        syllabus: ["JSX", "Hooks", "State", "Props"],
        content: [
            {
                title: "Introduction",
                duration: "1h 20min",
                lectures: [
                    {
                        title: "What is React?",
                        duration: "10min",
                        preview: true,
                    },
                ],
            },
        ],
        image: "https://example.com/react.jpg",
        price: 499,
        originalPrice: 1299,
        instructor: {
            name: "Lucifer",
            photo: "/assets/lucifer.jpg",
        },
        rating: 5,
    },
];
