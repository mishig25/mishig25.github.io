<div class="font-mono px-4 my-2 max-w-[60rem] flex flex-col gap-3">

<p class="text-lg">Mishig Davaadorj</p>

<div class="flex gap-4">

gh: [@mishig25](https://github.com/mishig25)

x: [@mishig25](https://x.com/mishig25)

hf: [@mishig](https://huggingface.co/mishig)

lin: [@mishig](https://www.linkedin.com/in/mishig/)
</div>

Software & ML engineer specializing in large-scale ML infrastructure and developer tools. Bachelor's in [computer science](https://www.coloradocollege.edu/academics/curriculum/catalog/departmental/computer-science/index.html) from [Colorado College](https://www.coloradocollege.edu/) (2019). Since 2021, building the [Hugging Face Hub](https://huggingface.co/) and contributing to [Hugging Face's open-source ML libraries](https://github.com/huggingface).

<div class="ml-4">

Key contributions:

* Architected core features for [Hugging Face Hub](https://huggingface.co/), the leading platform for sharing ML models and datasets. Recent focus: making hf.co agent-ready:

<div class="ml-4 text-sm">

[llms.txt, markdown versions & semantic search API for all doc pages](https://huggingface.co/docs/transformers/llms.txt) so any agent can master Hugging Face libraries like [transformers](https://huggingface.co/docs/transformers) and [diffusers](https://huggingface.co/docs/diffusers) without scraping a single HTML page; [papers served as markdown for AI agents](https://huggingface.co/papers/1706.03762.md) so agents can ingest the ML literature and run [autoresearch](https://x.com/mishig25/status/2038014189734699358) on top of it; [/agents.md instructions endpoint for Spaces](https://huggingface.co/spaces/evalstate/flux1_schnell/agents.md) so agents can operate 50k+ community apps as tools, [from image generation to 3D model creation](https://x.com/mishig25/status/2045115082628124673); [MCP server tagging & discovery](https://huggingface.co/spaces?filter=mcp-server) turning the Hub into the largest open registry of agent tools.

</div>

* Other notable Hub features:

<div class="ml-4 text-sm">

[semantic search over 50k+ community submitted apps](https://huggingface.co/spaces), [full-text search](https://huggingface.co/search), [chat-ui](https://huggingface.co/chat/), [file uploading](https://huggingface.co/stabilityai/stable-diffusion-3-medium/upload/main), [code editor](https://huggingface.co/stabilityai/stable-diffusion-3-medium/edit/main/README.md), [weights visualizer](https://huggingface.co/bartowski/Codestral-22B-v0.1-GGUF?show_file_info=Codestral-22B-v0.1-Q3_K_M.gguf), [blog writing & publishing platform](https://huggingface.co/blog).

</div>

* [diffusers#559](https://github.com/huggingface/diffusers/pull/559): JAX/Flax implementation of Stable Diffusion 1.1 for TPU inference.

* [tokenizers#890](https://github.com/huggingface/tokenizers/pull/890): optimized serialization/deserialization for [tokenizers](https://github.com/huggingface/tokenizers) using Rust macros and [serde](https://crates.io/crates/serde).

* [huggingface/chat-ui](https://github.com/huggingface/chat-ui): conversational interface for LLMs with MCP (Model Context Protocol) support for tool calling and RAG.

* [chat-template-playground](https://github.com/huggingface/chat-template-playground): tool for testing chat templates, used in post-training workflows like [HuggingFaceTB/SmolLM3-3B](https://huggingface.co/spaces/HuggingFaceTB/smol-training-playbook#picking-a-good-chat-template) ([demo](https://huggingface.co/spaces/huggingfacejs/chat-template-playground)).

* [transformers#13828](https://github.com/huggingface/transformers/pull/13828): image segmentation pipeline for [facebook/detr-resnet-50](https://huggingface.co/facebook/detr-resnet-50) and other models.

* [tokenizers#976](https://github.com/huggingface/tokenizers/pull/976): parallelized [unigram tokenization](https://huggingface.co/learn/nlp-course/en/chapter6/7) trainer with [rayon](https://crates.io/crates/rayon).

* [lerobot-dataset-visualizer](https://github.com/huggingface/lerobot-dataset-visualizer): robotics dataset visualizer handling video and sensor data. Powers [LeRobot community](https://huggingface.co/lerobot) dataset exploration and [SmolVLA](https://huggingface.co/blog/smolvla) training ([demo](https://huggingface.co/spaces/lerobot/visualize_dataset)). 

* [huggingface/doc-builder](https://github.com/huggingface/doc-builder): documentation framework parsing markdown, notebooks, and docstrings to generate docs websites, powering [hf.co/docs](https://huggingface.co/docs).

* [huggingface/gguf.js](https://github.com/huggingface/huggingface.js/tree/main/packages/gguf): JavaScript parser for [GGUF](https://github.com/ggerganov/ggml/blob/master/docs/gguf.md) model weights with remote file support, enabling partial downloads.

* [diffuse-the-rest](https://x.com/mishig25/status/1563226161924407298): viral web app transforming sketches into images with Stable Diffusion. One of the earliest SD apps to gain widespread adoption (Aug 2022).

</div>

</div>
