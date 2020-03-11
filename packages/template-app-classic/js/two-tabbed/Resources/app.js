/**
 * Create a new `Ti.UI.TabGroup`.
 */
const tabGroup = Ti.UI.createTabGroup();

/**
 * Add the two created tabs to the tabGroup object.
 */
tabGroup.addTab(createTab('Tab 1', 'I am Window 1', 'assets/images/tab1.png'));
tabGroup.addTab(createTab('Tab 2', 'I am Window 2', 'assets/images/tab2.png'));

/**
 * Open the tabGroup.
 */
tabGroup.open();

/**
 * Creates a new Tab and configures it.
 *
 * @param {String} title - The title used in the `Ti.UI.Tab` and it's included `Ti.UI.Window`.
 * @param {String} message - The title displayed in the `Ti.UI.Label`.
 * @param {String} icon - The icon used in the `Ti.UI.Tab`.
 * @returns {Ti.UI.Tab}
 */
function createTab(title, message, icon) {
    const win = Ti.UI.createWindow({
		backgroundColor: '#fff',
		title
    });

    win.add(Ti.UI.createLabel({
        color: '#333',
        font: {
            fontSize: 20
        },
        text: message
    }));

    return Ti.UI.createTab({
        icon,
        title,
        window: win
    });
}
