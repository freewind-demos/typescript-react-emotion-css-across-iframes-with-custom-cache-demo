import createEmotion from "@emotion/css/create-instance";

export function createCustomEmotion(container: Node) {
    return createEmotion({
        key: 'custom-emotion',
        container
    })
}
