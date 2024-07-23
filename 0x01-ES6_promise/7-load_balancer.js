// Define and export the loadBalancer function
export default function loadBalancer(chinaDownload, USDownload) {
    // Return the result of Promise.race
    return Promise.race([chinaDownload, USDownload]);
}
