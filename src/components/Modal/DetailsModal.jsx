const DetailsModal = ({ i }) => {
    return (
        <>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box bg-white rounded-xl shadow-2xl p-8">
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Student Details</h2>
                        <div className="grid grid-cols-3 gap-6 mb-8">
                            <div className="border p-4 rounded-xl bg-gray-50 shadow-md">
                                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                <p className="text-lg font-semibold text-gray-900">{i?.firstName}</p>
                            </div>
                            <div className="border p-4 rounded-xl bg-gray-50 shadow-md">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Middle Name</label>
                                <p className="text-lg font-semibold text-gray-900">{i?.middleName}</p>
                            </div>
                            <div className="border p-4 rounded-xl bg-gray-50 shadow-md">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                <p className="text-lg font-semibold text-gray-900">{i?.lastName}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-6 mb-8">
                            <div className="border p-4 rounded-xl bg-gray-50 shadow-md">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Class Name</label>
                                <p className="text-lg font-semibold text-gray-900">{i?.className}</p>
                            </div>
                            <div className="border p-4 rounded-xl bg-gray-50 shadow-md">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Division</label>
                                <p className="text-lg font-semibold text-gray-900">{i?.division}</p>
                            </div>
                            <div className="border p-4 rounded-xl bg-gray-50 shadow-md">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Roll</label>
                                <p className="text-lg font-semibold text-gray-900">{i?.roll}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6 mb-8">
                            <div className="border p-4 rounded-xl bg-gray-50 shadow-md">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Address 1</label>
                                <p className="text-lg font-semibold text-gray-900">{i?.address1}</p>
                            </div>
                            <div className="border p-4 rounded-xl bg-gray-50 shadow-md">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Address 2</label>
                                <p className="text-lg font-semibold text-gray-900">{i?.address2}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-3 gap-6 mb-8">
                            <div className="border p-4 rounded-xl bg-gray-50 shadow-md">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Landmark</label>
                                <p className="text-lg font-semibold text-gray-900">{i?.landmark}</p>
                            </div>
                            <div className="border p-4 rounded-xl bg-gray-50 shadow-md">
                                <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
                                <p className="text-lg font-semibold text-gray-900">{i?.city}</p>
                            </div>
                            <div className="border p-4 rounded-xl bg-gray-50 shadow-md">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Pincode</label>
                                <p className="text-lg font-semibold text-gray-900">{i?.pincode}</p>
                            </div>
                        </div>
                    </div>

                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    );
};

export default DetailsModal;
