const gameTechExperience = {
    computed: {
        gameTechExperience() {
            return {
              unreal: {
                title: "Unreal Engine",
                brief:
                  "1 year of using Unreal Engine 4 and 5 for small personal game projects. Familiar with both C++ and Blueprint programming, as well as basics of setting up scene lighting using Lumen.",
                icon: require("../../assets/ue.png"),
              },
              unity: {
                title: "Unity",
                brief: `Familiar with using the Unity engine, having used it on-and-off since 2013, including 1 year spent on developing a small multiplayer game to completion.
                Familiar with C# programming, Photon & Netcode for GameObjects, Universal Render Pipeline, Shader Graph and HLSL.`,
                icon: require("../../assets/unityLogo.png"),
              },
              opengl: {
                title: "OpenGL",
                brief:
                  "Familiar with creating basic 3D renderers using the modern OpenGL spec using C++ for host code, writing GLSL shaders for simple lighting models (Gouraud, Phong), and debugging using ImGui and RenderDoc.",
                icon: require("../../assets/opengl.png"),
              },
              physx: {
                title: "PhysX",
                brief:
                  "Working knowledge of the NVIDIA PhysX C++ SDK. As part of University project, produced a small 3D pinball game making use of various collider types, different material properties (restitution/friction coefficients) to serve gameplay purposes, and integrated simulation with a basic OpenGL scene graph.",
                icon: require("../../assets/physx.png"),
              },
            };
          }
    }
};

export { gameTechExperience }