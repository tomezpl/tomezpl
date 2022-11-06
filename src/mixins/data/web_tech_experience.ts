const webTechExperience = {
    computed: {
        webTechExperience() {
            return {
                dotnet: {
                    title: ".NET Core",
                    brief: "4 years using .NET Core in a professional capacity",
                    icon: require("../../assets/NET_Core_Logo.png"),
                },
                vue: {
                    title: "Vue.js",
                    brief:
                        "4 years using Vue.js in a professional capacity. Familiar with Vue 2.x, 3.x, JSX syntax, Vue CLI and TypeScript API.",
                    icon: require("../../assets/512px-Vue.js_Logo_2.png"),
                },
                bootstrap: {
                    title: "Bootstrap",
                    brief:
                        "4 years using Bootstrap in a professional capacity. Solid working knowledge of the layout system and core components, as well as SCSS customization and extending functionality with custom code.",
                    icon: require("../../assets/Bootstrap_logo.png"),
                },
                "unit-testing": {
                    title: "Testing",
                    brief:
                        "2 years' experience writing manual tests, unit tests using Xunit (C#) & GoogleTest (C++) as well as automated Web UI tests using Playwright.",
                    img: null,
                    icon: () =>
                        '<div class="mx-auto"><i class="bi bi-list-check" /></div>',
                },
                azure: {
                    title: "Azure",
                    brief: `3 years' experience with using the Microsoft Azure platform. Knowledgeable about common tasks such as configuring & deploying app services, debugging deployed code, etc.
                Familiar with the Azure DevOps platform, Git workflow, Continuous Testing, Azure Pipelines and Azure Artifacts.`,
                    icon: require("../../assets/azure.png"),
                },
                chatbot: {
                    title: "Conversational AI",
                    brief:
                        "4 years of experience developing conversational AI services (chat bots). Solid working knowledge of Microsoft's Bot Framework, Bot Builder SDK, Composer, as well as Natural Language Processing solutions such as Microsoft LUIS. Basic familiarity with machine learning concepts.",
                    icon: () => '<div class="mx-auto"><i class="bi bi-robot" /></div>',
                }
            };
        }
    }
};

export { webTechExperience }