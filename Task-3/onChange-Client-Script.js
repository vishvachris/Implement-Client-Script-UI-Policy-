function onChange(control, oldValue, newValue, isLoading) {
    if (isLoading || newValue == '') {
        return;
    }

    if (newValue == '1') {
        g_form.setValue('urgency', '1');
        g_form.showFieldMsg(
            'impact',
            'High impact incidents must have High urgency and an assignment group.',
            'info'
        );
    }
}
