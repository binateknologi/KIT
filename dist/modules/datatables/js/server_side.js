
    var dt = $('.mytable').DataTable({
        // stateSave: true,

        "processing": true,
        "serverSide": true,
        "ajax": {
            "url": "conf/ajax_santri.php?action=table_data",
            "dataType": "json",
            "type": "POST"
        },
        "columns": [{
                "data": "no"
            },
            {
                "data": "tgl_masuk"
            },
            {
                "data": "santri_nama"
            },
            {
                "data": "santri_jk"
            },
            {
                "data": "santri_alamat"
            },
            {
                "data": "no_wali"
            },
            {
                "data": "aksi"
            },
        ],
        dom: "<'row mb-3' <'col-sm-12'B>> <'row mb-1'<'col-sm-8' l><'col-sm-4 ' f>>t <'row mb-1'<'col-sm-8' i><'col-sm-4 ' p>>",
        lengthMenu: [
            [10, 25, 50, 100, 200, 500, 10000],
            ['10', '25', '50', '100', '200', '500', 'All']
        ],
        pageLength: 10,
        buttons: [{
                extend: "colvis",
                className: "btn btn-sm btn-info shadow-none mr-2",

                text: 'Visible',

            }, {
                extend: "excel",
                className: "btn btn-sm btn-success shadow-none",
                titleAttr: 'Export in Excel',
                text: '<i class=\'fas fa-file-excel\'></i> Export Excel',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4]
                },
            },
            {
                extend: "pdfHtml5",
                orientation: 'landscape',
                pageSize: 'LEGAL',

                className: "btn btn-sm btn-danger shadow-none ml-2",
                titleAttr: 'PDF',
                text: '<i class=\'fas fa-file-pdf\'></i> PDF',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4]
                },
                title: " ",
                customize: function(doc) {
                    doc.content[1].table.widths =
                        Array(doc.content[1].table.body[0].length + 1).join('*').split('');
                }

            }, {
                extend: "print",
                className: "btn btn-sm btn-primary shadow-none rounded-pill-3 ml-2",
                titleAttr: 'Cetak Data',
                text: '<i class=\'fas fa-print\'></i> Cetak',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4]
                },
                orientation: 'landscape',
                title: "",
                customize: function(win) {
                    $(win.document.body).find('h1').css('text-align', 'center');
                    $(win.document.body).find('h1').css('font-size', '14px');

                    $(win.document.body).find('h1').html('<div class=\'w-100 cop_surat d-flex align-items-center justify-content-center\'>' +
                        '<img src=\'http://localhost/epondok/img/logo_pondok.png\' width=\'90px\' height=\'90\' style=\'margin-right:20px\' /><div><br>' +
                        '<h4 class=\'text-dark mb-0\'>PONDOK PESANTREN NURUL HIKMAH</h4>' +
                        '<h3>LAPORAN DATA SANTRI TAHUN ' + tahun + '</h3>' +

                        '</div></div><br><br>' +
                        '<div class=\'w-100 cop_surat d-flex align-items-center justify-content-left\'>' + tampilTanggal + '</div>');


                }


            }
        ],
        responsive: true,

    });





    var dt = $('.mytable2').DataTable({
        stateSave: true,
        dom: "<'row mb-3' <'col-sm-12'B>> <'row mb-1'<'col-sm-8' l><'col-sm-4 ' f>>t <'row mb-1'<'col-sm-8' i><'col-sm-4 ' p>>",
        lengthMenu: [
            [10, 25, 50, 100, -1],
            ['10', '25', '50', '100', 'Show all']
        ],
        buttons: [{
                extend: "excel",
                className: "btn btn-sm btn-success shadow-none",
                titleAttr: 'Export in Excel',
                text: '<i class=\'fas fa-file-excel\'></i> Export Excel',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4, 5]
                },
            },
            {
                extend: "pdfHtml5",
                className: "btn btn-sm btn-danger shadow-none ml-2",
                titleAttr: 'PDF',
                text: '<i class=\'fas fa-file-pdf\'></i> PDF',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4, 5]
                },
                orientation: 'landscape',
                title: "E-PONDOK",
                customize: function(doc) {
                    doc.content[1].table.widths =
                        Array(doc.content[1].table.body[0].length + 1).join('*').split('');
                }

            }, {
                extend: "print",
                className: "btn btn-sm btn-primary shadow-none rounded-pill-3 ml-2",
                titleAttr: 'Cetak Data',
                text: '<i class=\'fas fa-print\'></i> Cetak Langsung',
                exportOptions: {
                    columns: [0, 1, 2, 3, 4, 5]
                },
                orientation: 'landscape',
                title: " ",
                customize: function(win) {
                    $(win.document.body).find('h1').css('text-align', 'center');
                    $(win.document.body).find('h1').css('font-size', '14px');

                    $(win.document.body).find('h1').html('<div class=\'w-100 cop_surat d-flex align-items-center justify-content-center\'>' +
                        '<img src=\'http://localhost/epondok/img/logo_pondok.png\' width=\'90px\' height=\'90\' style=\'margin-right:20px\' /><div><br>' +
                        '<h4 class=\'text-dark mb-0\'>PONDOK PESANTREN NURUL HIKMAH</h4>' +
                        '<h3>LAPORAN IZIN SANTRI TAHUN ' + tahun + '</h3>' +

                        '</div></div><br><br>' +
                        '<div class=\'w-100 cop_surat d-flex align-items-center justify-content-left\'>' + tampilTanggal + '</div>');


                }


            }
        ],
        responsive: true,

    });
