import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import BaseTable from '../BaseComponents/BaseTable';
import BaseButton from '../BaseComponents/BaseBUtton';

const Page1 = () => {
    const { setFooterContent } = useOutletContext();
    const [showAdditionalDropdowns, setShowAdditionalDropdowns] = useState(false);
    const [showFileUpload, setShowFileUpload] = useState(false);
    const [showTable, setShowTable] = useState(false);
    const columns = ['column1', 'column2', 'column3'];
    const data = [
        { column1: 'Data 1', column2: 'Data 2', column3: 'Data 3' },
        { column1: 'Data 4', column2: 'Data 5', column3: 'Data 6' },
    ];

    useEffect(() => {
        setFooterContent("Select the ACTION you want to execute.");
    }, [setFooterContent]);

    const handleDropdown1Focus = () => {
        const newAdd = !showAdditionalDropdowns;
        setShowAdditionalDropdowns(newAdd);
        setShowTable(false);
        setShowFileUpload(false);
        if (newAdd) {
            setFooterContent("Select the TASK you want to execute. After selecting, please select a file to LOAD.");
        } else {
            setFooterContent("Select the ACTION you want to execute.");
        }
    };

    const handleFileFocus = () => {
        setShowFileUpload(!showFileUpload);
        setShowTable(false);
        setFooterContent("Select the TASK you want to execute. After selecting, please select a file to LOAD.");
    };

    const formik = useFormik({
        initialValues: {
            fileUpload: null,
        },
        validationSchema: Yup.object({
            fileUpload: Yup.mixed().required('File is required'),
        }),
        onSubmit: (values) => {
            console.log(values, "value");
            setShowTable(true);
            setShowFileUpload(false);
            setFooterContent("Select the TASK you want to execute. After selecting, please select a file to LOAD.");
        },
    });

    const handlePrint = () => {
        const printContent = document.getElementById("printable-table").innerHTML;
        const newWindow = window.open('', '', 'width=800,height=600');
        newWindow.document.write(`
            <html>
                <head>
                    <title>Print Table</title>
                    <style>
                        table {
                            width: 100%;
                            border-collapse: collapse;
                        }
                        th, td {
                            border: 1px solid black;
                            padding: 8px;
                            text-align: left;
                        }
                    </style>
                </head>
                <body>
                    <h2>Table Data</h2>
                    <div>${printContent}</div>
                </body>
            </html>
        `);
        newWindow.document.close();
        newWindow.print();
    };

    return (
        <div className="container mt-4">
            <h3>Page 1 - PIM Data Upload</h3>
            <form onSubmit={formik.handleSubmit}>
                <div className="row mb-3 mt-3">
                    <div className="col-md-3 col-sm-12 mb-3">
                        <BaseButton
                            id="buttonUpload"
                            className="form-select"
                            type="button"
                            onClick={handleDropdown1Focus}
                        >
                            Upload PIM data
                        </BaseButton>
                    </div>
                    <div className="col-md-3 col-sm-12 mb-3">
                        <BaseButton
                            id="buttonRetrieve"
                            className="form-select"
                            type="button"
                            disabled={true}
                        >
                            Retrieve PIM data
                        </BaseButton>
                    </div>
                    <div className="col-md-3 col-sm-12 mb-3">
                        <BaseButton
                            id="buttonDelete"
                            className="form-select"
                            type="button"
                            disabled={true}
                        >
                            Delete PIM data
                        </BaseButton>
                    </div>
                    <div className="col-md-3 col-sm-12 mb-3">
                        <BaseButton
                            id="buttonHide"
                            className="form-select"
                            type="button"
                            disabled={true}
                        >
                            <span className='invisible'>Hide</span>
                        </BaseButton>
                    </div>
                </div>

                {showAdditionalDropdowns && (
                    <>
                        <div className="col-md-3 col-sm-12 mb-3">
                            <BaseButton
                                id="dropdown2File"
                                className="btn btn-item d-flex justify-content-between align-items-center w-100"
                                type="button"
                                onClick={handleFileFocus}
                            >
                                <span>Add item file</span>
                                <span className="ml-2">&gt;</span>
                            </BaseButton>
                        </div>
                        <div className="col-md-3 col-sm-12">
                            <BaseButton
                                id="dropdown2FileUpdate"
                                className="btn btn-item d-flex justify-content-between align-items-center w-100"
                                type="button"
                            >
                                <span>Update item file</span>
                                <span className="ml-2">&gt;</span>
                            </BaseButton>
                        </div>
                    </>
                )}

                <div className="file-upload-container mt-4">
                    {showFileUpload && (
                        <div className="file-upload card text-center mb-4">
                            <div className='card-body'>
                                <label htmlFor="fileUpload" className="form-label">File Upload</label>
                                <input
                                    type="file"
                                    className={`form-control mb-3 ${formik.touched.fileUpload && formik.errors.fileUpload ? 'is-invalid' : ''}`}
                                    id="fileUpload"
                                    name="fileUpload"
                                    onChange={(event) => {
                                        formik.setFieldValue("fileUpload", event.currentTarget.files[0]);
                                    }}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.fileUpload && formik.errors.fileUpload ? (
                                    <div className="invalid-feedback">{formik.errors.fileUpload}</div>
                                ) : null}
                                <button type="submit" className='btn btn-dark'>Load</button>
                            </div>
                        </div>
                    )}
                    {showTable && (
                        <>
                            <div className="table-container" >
                                <div id="printable-table">
                                    <BaseTable columns={columns} data={data} />
                                </div>
                                <div className='d-flex justify-content-end'>
                                    <button type="button" className="btn btn-secondary w-25" onClick={handlePrint}>Print</button>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </form>
        </div>
    );
};

export default Page1;
