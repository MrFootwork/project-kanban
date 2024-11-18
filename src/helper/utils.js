export function openLinkInNewTab(url) {
	const newTab = window.open(url, '_blank');

	if (!newTab)
		return alert('Failed to open the new tab. Please allow pop-ups.');

	newTab.focus();
}
